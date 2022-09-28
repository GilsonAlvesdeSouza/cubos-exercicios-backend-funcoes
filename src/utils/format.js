"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    currency: (valor) => {
        return valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    },
};
//# sourceMappingURL=format.js.map