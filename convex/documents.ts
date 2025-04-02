import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const getByIds = query({
  args: { ids: v.array(v.id("documents")) },
  handler: async (ctx, { ids }) => {
    const documents = []

    for (const id of ids) {
      const document = await ctx.db.get(id);

      if ( document ) {
        documents.push({ id: document._id, name: document.title, })
      } else {
        documents.push({ id, name: "[Removed]" })
      }
    }

    return documents;
  }
})

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity(); // 1

    if (!user) {
      // 2
      throw new ConvexError("Unauthorized");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    const documentId = await ctx.db.insert("documents", {
      // 3
      title: args.title ?? "Untitled Document",
      ownerId: user.subject,
      organizationId,
      initialContent: args.initialContent,
    });

    return documentId; // 4
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    console.log({ user });

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    // Search within organization
    if (search && organizationId) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", organizationId)
        )
        .paginate(paginationOpts);
    }

    // Personal Search
    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        )
        .paginate(paginationOpts);
    }

    // All docs inside Organization
    if (organizationId) {
      return await ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) =>
          q.eq("organizationId", organizationId)
        )
        .paginate(paginationOpts);
    }

    // All personal docs
    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .paginate(paginationOpts);
  },
});

export const getName = query({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    return document.title;
  },
});

export const removeById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError("Document not found!");
    }

    // Extract user info
    const userId = user.subject;
    const organizationId = user.organization_id ?? undefined;
    const organizationRole = user.organization_role ?? undefined;

    const isOwner = document.ownerId === userId;
    const isOrganizationMember = (!!document.organizationId && document.organizationId === organizationId);
    const isOrganizationAdmin = organizationRole
      ? (organizationRole as string).includes("admin")
      : false;

    console.log({
      userId,
      documentOwnerId: document.ownerId,
      isOwner,
      organizationId,
      documentOrgId: document.organizationId,
      isOrganizationMember,
      organizationRole,
      isOrganizationAdmin,
    });

    if (isOwner) {
      return await ctx.db.delete(args.id);
    }

    if (isOrganizationAdmin) {
      return await ctx.db.delete(args.id);
    }

    if (!isOrganizationMember) {
      throw new ConvexError("You don't have access to this document!");
    }
    
    if (isOrganizationAdmin || isOwner) {
      return await ctx.db.delete(args.id);
    }

    // If we reach here, the user is a member but neither admin nor owner
    throw new ConvexError("Members can only delete their own documents!");
  },
});

export const updateById = mutation({
  args: { id: v.id("documents"), title: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError("Document not found!");
    }

    // Extract user info
    const userId = user.subject;
    const organizationId = user.organization_id ?? undefined;
    const organizationRole = user.organization_role ?? undefined;

    const isOwner = document.ownerId === userId;
    const isOrganizationMember = (!!document.organizationId && document.organizationId === organizationId);
    const isOrganizationAdmin = organizationRole
      ? (organizationRole as string).includes("admin")
      : false;

    console.log({
      userId,
      documentOwnerId: document.ownerId,
      isOwner,
      organizationId,
      documentOrgId: document.organizationId,
      isOrganizationMember,
      organizationRole,
      isOrganizationAdmin,
    });

    if (isOwner) {
      return await ctx.db.patch(args.id, {
        title: args.title,
      });
    }

    if (isOrganizationAdmin) {
      return await ctx.db.patch(args.id, {
        title: args.title,
      });
    }

    // Check if user is in the same organization as the document
    if (!isOrganizationMember) {
      throw new ConvexError("You don't have access to this document!");
    }

    // Admin or owner can update
    if (isOrganizationAdmin || isOwner) {
      return await ctx.db.patch(args.id, {
        title: args.title,
      });
    }

    // If we reach here, the user is a member but neither admin nor owner
    throw new ConvexError("Members can only rename their own documents!");
  },
});

// TODO: Add RBAC - Admins can only delete & rename [ steps- (7:18:40) 1. JWT token update => 2. organizationRole => 3. isOrganizationAdmin]


export const getById = query({
  args: { id: v.id("documents" )},
  handler: async (ctx, { id }) => {
    const document = await ctx.db.get(id)

    if (! document) {
      throw new ConvexError("Document not found")
    }
    return document;
  },
});