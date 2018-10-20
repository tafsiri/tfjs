import { ConstantConfig, IdentityConfig, Initializer, OrthogonalConfig, RandomNormalConfig, RandomUniformConfig, SeedOnlyInitializerConfig, TruncatedNormalConfig, VarianceScalingConfig, Zeros } from './initializers';
export declare function zeros(): Zeros;
export declare function ones(): Initializer;
export declare function constant(config: ConstantConfig): Initializer;
export declare function randomUniform(config: RandomUniformConfig): Initializer;
export declare function randomNormal(config: RandomNormalConfig): Initializer;
export declare function truncatedNormal(config: TruncatedNormalConfig): Initializer;
export declare function identity(config: IdentityConfig): Initializer;
export declare function varianceScaling(config: VarianceScalingConfig): Initializer;
export declare function glorotUniform(config: SeedOnlyInitializerConfig): Initializer;
export declare function glorotNormal(config: SeedOnlyInitializerConfig): Initializer;
export declare function heNormal(config: SeedOnlyInitializerConfig): Initializer;
export declare function leCunNormal(config: SeedOnlyInitializerConfig): Initializer;
export declare function orthogonal(config: OrthogonalConfig): Initializer;
