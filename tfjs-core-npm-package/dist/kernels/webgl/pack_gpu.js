"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackProgram = (function () {
    function PackProgram(outputShape) {
        this.variableNames = ['A'];
        this.outputShape = outputShape;
        this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        int r = rc.x;\n        int c = rc.y;\n\n        if(r >= " + outputShape[0] + " || c >= " + outputShape[1] + ") {\n          gl_FragColor = vec4(0);\n        } else {\n          int rp1 = r + 1;\n          int cp1 = c + 1;\n\n          bool cEdge = cp1 >= " + outputShape[1] + ";\n          bool rEdge = rp1 >= " + outputShape[0] + ";\n\n          gl_FragColor = vec4(\n              getA(r, c),\n              cEdge ? 0. : getA(r, cp1),\n              rEdge ? 0. : getA(rp1, c),\n              rEdge || cEdge ? 0. : getA(rp1, cp1)\n            );\n        }\n      }\n    ";
    }
    return PackProgram;
}());
exports.PackProgram = PackProgram;
//# sourceMappingURL=pack_gpu.js.map