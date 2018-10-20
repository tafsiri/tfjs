"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnpackProgram = (function () {
    function UnpackProgram(outputShape) {
        this.variableNames = ['A'];
        this.outputShape = outputShape;
        this.userCode = "\n      const vec2 onePixel = 1. / vec2(" + outputShape[1] + ", " + outputShape[0] + ");\n\n      void main() {\n        ivec2 rc = getOutputCoords();\n        vec2 modCoord = mod(vec2(rc.y, rc.x), 2.);\n        vec4 packedInput = getA(rc.x, rc.y);\n\n        setOutput(\n          modCoord.x == 0. ?\n            (modCoord.y == 0. ? packedInput.r : packedInput.b) :\n            (modCoord.y == 0. ? packedInput.g : packedInput.a)\n        );\n      }\n    ";
    }
    return UnpackProgram;
}());
exports.UnpackProgram = UnpackProgram;
//# sourceMappingURL=unpack_gpu.js.map