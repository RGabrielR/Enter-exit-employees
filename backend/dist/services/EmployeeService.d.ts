export declare function getEmployeesInside(): Promise<{
    selectedTimestamp: any;
    _id: import("mongoose").Types.ObjectId;
    fullName: string;
    email: string;
    dni: string;
    $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<import("../models/Employee.js").IEmployee, keyof Paths> & Paths;
    $clearModifiedPaths: () => import("../models/Employee.js").IEmployee;
    $clone: () => import("../models/Employee.js").IEmployee;
    $createModifiedPathsSnapshot: () => import("mongoose").ModifiedPathsSnapshot;
    $getAllSubdocs: () => import("mongoose").Document[];
    $ignore: (path: string) => void;
    $isDefault: (path: string) => boolean;
    $isDeleted: (val?: boolean) => boolean;
    $getPopulatedDocs: () => import("mongoose").Document[];
    $inc: (path: string | string[], val?: number) => import("../models/Employee.js").IEmployee;
    $isEmpty: (path: string) => boolean;
    $isValid: (path: string) => boolean;
    $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
    $markValid: (path: string) => void;
    $model: {
        <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, any>>(name: string): ModelType;
        <ModelType = import("mongoose").Model<any, {}, {}, {}, any, any>>(): ModelType;
    };
    $op: "save" | "validate" | "remove" | null;
    $restoreModifiedPathsSnapshot: (snapshot: import("mongoose").ModifiedPathsSnapshot) => import("../models/Employee.js").IEmployee;
    $session: (session?: import("mongoose").ClientSession | null) => import("mongoose").ClientSession | null;
    $set: {
        (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("../models/Employee.js").IEmployee;
        (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("../models/Employee.js").IEmployee;
        (value: string | Record<string, any>): import("../models/Employee.js").IEmployee;
    };
    $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
    baseModelName?: string;
    collection: import("mongoose").Collection;
    db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
    deleteOne: (options?: import("mongoose").QueryOptions) => any;
    depopulate: <Paths = {}>(path?: string | string[]) => import("mongoose").MergeType<import("../models/Employee.js").IEmployee, Paths>;
    directModifiedPaths: () => Array<string>;
    equals: (doc: import("mongoose").Document<unknown, any, any, Record<string, any>>) => boolean;
    errors?: import("mongoose").Error.ValidationError;
    get: {
        <T extends string | number | symbol>(path: T, type?: any, options?: any): any;
        (path: string, type?: any, options?: any): any;
    };
    getChanges: () => import("mongoose").UpdateQuery<import("../models/Employee.js").IEmployee>;
    id?: any;
    increment: () => import("../models/Employee.js").IEmployee;
    init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => import("../models/Employee.js").IEmployee;
    invalidate: {
        <T extends string | number | symbol>(path: T, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
        (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
    };
    isDirectModified: {
        <T extends string | number | symbol>(path: T | T[]): boolean;
        (path: string | Array<string>): boolean;
    };
    isDirectSelected: {
        <T extends string | number | symbol>(path: T): boolean;
        (path: string): boolean;
    };
    isInit: {
        <T extends string | number | symbol>(path: T): boolean;
        (path: string): boolean;
    };
    isModified: {
        <T extends string | number | symbol>(path?: T | T[], options?: {
            ignoreAtomics?: boolean;
        } | null): boolean;
        (path?: string | Array<string>, options?: {
            ignoreAtomics?: boolean;
        } | null): boolean;
    };
    isNew: boolean;
    isSelected: {
        <T extends string | number | symbol>(path: T): boolean;
        (path: string): boolean;
    };
    markModified: {
        <T extends string | number | symbol>(path: T, scope?: any): void;
        (path: string, scope?: any): void;
    };
    model: {
        <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, any>>(name: string): ModelType;
        <ModelType = import("mongoose").Model<any, {}, {}, {}, any, any>>(): ModelType;
    };
    modifiedPaths: (options?: {
        includeChildren?: boolean;
    }) => Array<string>;
    overwrite: (obj: import("mongoose").AnyObject) => import("../models/Employee.js").IEmployee;
    $parent: () => import("mongoose").Document | undefined;
    populate: {
        <Paths = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<import("../models/Employee.js").IEmployee, Paths>>;
        <Paths = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: import("mongoose").Model<any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<import("../models/Employee.js").IEmployee, Paths>>;
    };
    populated: (path: string) => any;
    replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("../models/Employee.js").IEmployee, {}, unknown, "find", Record<string, never>>;
    save: (options?: import("mongoose").SaveOptions) => Promise<import("../models/Employee.js").IEmployee>;
    schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        [x: string]: unknown;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        [x: string]: unknown;
    }>, {}> & import("mongoose").FlatRecord<{
        [x: string]: unknown;
    }> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>>;
    set: {
        <T extends string | number | symbol>(path: T, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("../models/Employee.js").IEmployee;
        (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("../models/Employee.js").IEmployee;
        (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("../models/Employee.js").IEmployee;
        (value: string | Record<string, any>): import("../models/Employee.js").IEmployee;
    };
    toJSON: {
        (options: import("mongoose").ToObjectOptions & {
            virtuals: true;
        }): any;
        (options?: import("mongoose").ToObjectOptions & {
            flattenMaps?: true;
            flattenObjectIds?: false;
        }): import("mongoose").FlattenMaps<any>;
        (options: import("mongoose").ToObjectOptions & {
            flattenObjectIds: false;
        }): import("mongoose").FlattenMaps<any>;
        (options: import("mongoose").ToObjectOptions & {
            flattenObjectIds: true;
        }): {
            [x: string]: any;
        };
        (options: import("mongoose").ToObjectOptions & {
            flattenMaps: false;
        }): any;
        (options: import("mongoose").ToObjectOptions & {
            flattenMaps: false;
            flattenObjectIds: true;
        }): any;
        <T = any>(options?: import("mongoose").ToObjectOptions & {
            flattenMaps?: true;
            flattenObjectIds?: false;
        }): import("mongoose").FlattenMaps<T>;
        <T = any>(options: import("mongoose").ToObjectOptions & {
            flattenObjectIds: false;
        }): import("mongoose").FlattenMaps<T>;
        <T = any>(options: import("mongoose").ToObjectOptions & {
            flattenObjectIds: true;
        }): import("mongoose").ObjectIdToString<import("mongoose").FlattenMaps<T>>;
        <T = any>(options: import("mongoose").ToObjectOptions & {
            flattenMaps: false;
        }): T;
        <T = any>(options: import("mongoose").ToObjectOptions & {
            flattenMaps: false;
            flattenObjectIds: true;
        }): import("mongoose").ObjectIdToString<T>;
    };
    toObject: {
        (options: import("mongoose").ToObjectOptions & {
            virtuals: true;
        }): any;
        (options?: import("mongoose").ToObjectOptions): any;
        <T>(options?: import("mongoose").ToObjectOptions): import("mongoose").Default__v<import("mongoose").Require_id<T>>;
    };
    unmarkModified: {
        <T extends string | number | symbol>(path: T): void;
        (path: string): void;
    };
    updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<import("../models/Employee.js").IEmployee>, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("../models/Employee.js").IEmployee, {}, unknown, "find", Record<string, never>>;
    validate: {
        <T extends string | number | symbol>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): Promise<void>;
        (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
        (options: {
            pathsToSkip?: import("mongoose").pathsToSkip;
        }): Promise<void>;
    };
    validateSync: {
        (options: {
            pathsToSkip?: import("mongoose").pathsToSkip;
            [k: string]: any;
        }): import("mongoose").Error.ValidationError | null;
        <T extends string | number | symbol>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
        (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
    };
    __v: number;
}[]>;
export declare function getAllEmployees(): Promise<(import("mongoose").Document<unknown, {}, import("../models/Employee.js").IEmployee, {}> & import("../models/Employee.js").IEmployee & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
})[]>;
