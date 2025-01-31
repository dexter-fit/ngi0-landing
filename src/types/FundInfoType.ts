/**
 * Type representing information about a fund, that the project is currently under.
 */
export type FundInfoType = {
    /**
     * Fund name (e.g.: "NGI Zero Core")
     */
    fund?: string;
    /**
     * Start of the project funding from this fund, in the same format as used on nlnet page (e.g.: 2026-01).
     */
    start?: string;
    /**
     * End of the project funding from this fund, in the same format as used on nlnet page (e.g.: 2026-07).
     */
    end?: string;
}
