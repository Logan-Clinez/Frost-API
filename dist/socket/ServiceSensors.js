"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
class ServiceSensorHandler {
    static handle(manager, message, server) {
        const { cpuTotal, memory } = message.payload.data.serviceSensors;
        manager.events.emit(constants_1.RCEEvent.ServiceSensor, {
            server,
            cpuPercentage: Number(cpuTotal.toFixed(2)),
            memoryUsed: memory.used / (1024 * 1024 * 1024),
        });
    }
}
exports.default = ServiceSensorHandler;
//# sourceMappingURL=ServiceSensors.js.map