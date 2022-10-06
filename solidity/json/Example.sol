pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "JsonGenerator.sol";

contract ExampleContract {
    
    using JsonWriter for JsonWriter.Json;

    function generateJSON() external returns (string) {
        JsonWriter.Json writer;

        writer.writeStart();
        
        writer.writeString("Product", "PC");

        writer.writeStartArray("Drives");
        writer.writeArrayString("500 gb");
        writer.writeArrayNumber("500");
        writer.writeEndArray();

        writer.writeStartName("network");
        writer.writeString("lan", "true");
        writer.writeString("wifi", "false");
        writer.writeEnd();

        writer.writeEnd();

        return writer.value;
    }
}