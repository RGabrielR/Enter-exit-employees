export declare function registerEntry(employeeId: string, selectedDate?: Date): Promise<import("mongoose").Document<unknown, {}, import("../models/Record").IRecord, {}> & import("../models/Record").IRecord & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function registerExit(employeeId: string, selectedDate?: Date): Promise<{
    record: import("mongoose").Document<unknown, {}, import("../models/Record").IRecord, {}> & import("../models/Record").IRecord & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    message: string;
    hours: number;
}>;
