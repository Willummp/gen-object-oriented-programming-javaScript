"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(_a) {
        var name = _a.name, hEntrada = _a.hEntrada, hSaida = _a.hSaida, cpf = _a.cpf;
        this.name = name;
        this.hSaida = hSaida;
        this.hEntrada = hEntrada;
        this.cpf = cpf;
    }
    return Funcionario;
}());
exports.Funcionario = Funcionario;
