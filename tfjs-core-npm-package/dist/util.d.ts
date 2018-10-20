import { ArrayData, DataType, DataTypeMap, FlatVector, RecursiveArray, RegularArray, TensorLike, TypedArray } from './types';
export declare function shuffle(array: any[] | Uint32Array | Int32Array | Float32Array): void;
export declare function clamp(min: number, x: number, max: number): number;
export declare function nearestLargerEven(val: number): number;
export declare function randUniform(a: number, b: number): number;
export declare function distSquared(a: FlatVector, b: FlatVector): number;
export declare function assert(expr: boolean, msg: string | (() => string)): void;
export declare function assertShapesMatch(shapeA: number[], shapeB: number[], errorMessagePrefix?: string): void;
export declare function assertNonNull(a: TensorLike): void;
export declare function flatten<T extends number | boolean | Promise<number>>(arr: T | RecursiveArray<T>, ret?: T[]): T[];
export declare function sizeFromShape(shape: number[]): number;
export declare function isScalarShape(shape: number[]): boolean;
export declare function arraysEqual(n1: FlatVector, n2: FlatVector): boolean;
export declare function isInt(a: number): boolean;
export declare function tanh(x: number): number;
export declare function sizeToSquarishShape(size: number): [number, number];
export declare function createShuffledIndices(n: number): Uint32Array;
export declare function rightPad(a: string, size: number): string;
export declare function repeatedTry(checkFn: () => boolean, delayFn?: (counter: number) => number, maxCounter?: number): Promise<void>;
export declare function inferFromImplicitShape(shape: number[], size: number): number[];
export declare function squeezeShape(shape: number[], axis?: number[]): {
    newShape: number[];
    keptDims: number[];
};
export declare function getTypedArrayFromDType<D extends DataType>(dtype: D, size: number): DataTypeMap[D];
export declare function checkComputationForNaN<D extends DataType>(vals: DataTypeMap[D], dtype: D, name: string): void;
export declare function checkConversionForNaN<D extends DataType>(vals: DataTypeMap[D] | number[], dtype: D): void;
export declare function hasEncodingLoss(oldType: DataType, newType: DataType): boolean;
export declare function isTypedArray(a: TypedArray | number | boolean | RegularArray<number> | RegularArray<boolean>): boolean;
export declare function bytesPerElement(dtype: DataType): number;
export declare function isFunction(f: Function): boolean;
export declare function nearestDivisor(size: number, start: number): number;
export declare function computeStrides(shape: number[]): number[];
export declare function toTypedArray<D extends DataType>(a: ArrayData<D>, dtype: D, debugMode: boolean): DataTypeMap[D];
export declare function makeOnesTypedArray<D extends DataType>(size: number, dtype: D): DataTypeMap[D];
export declare function makeZerosTypedArray<D extends DataType>(size: number, dtype: D): DataTypeMap[D];
export declare function now(): number;
