import { parseAsString, useQueryState } from "nuqs";

export function useSearchParams() {
    return useQueryState (
        "search", // Ass "search" is the only query-params in  this application... 
        parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    );
};


// import { parseAsString, useQueryState } from "nuqs";

// export function useSearchParams(key: string) {
//     return useQueryState (
//         key, // Ass "search" is the only query-params in  this application... 
//         parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
//     );
// };