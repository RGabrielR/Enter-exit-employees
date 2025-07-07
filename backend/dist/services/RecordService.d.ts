export declare function registerEntry(employeeId: string, selectedDate?: Date): Promise<import("mongoose").Document<unknown, {}, import("../models/Record.js").IRecord, {}> & import("../models/Record.js").IRecord & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function registerExit(employeeId: string, selectedDate?: Date): Promise<{
    record: import("mongoose").Document<unknown, {}, import("../models/Record.js").IRecord, {}> & import("../models/Record.js").IRecord & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    message: string;
    hours: number;
}>;
