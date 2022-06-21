pragma ton-solidity >= 0.35.0;
pragma AbiHeader expire;

import "JsonGenerator.sol";

contract ExampleContract {
    
    using JsonWriter for JsonWriter.Json;

    function generateJSON() external returns (string) {
        JsonWriter.Json writer;

        writer = writer.writeStart();
        
        writer = writer.writeString("Product", "PC");

        writer = writer.writeStartArray("Drives");
        writer = writer.writeArrayString("500 gb");
        writer = writer.writeArrayNumber("500");
        writer = writer.writeEndArray();

        writer = writer.writeStartName("network");
        writer = writer.writeString("lan", "true");
        writer = writer.writeString("wifi", "false");
        writer = writer.writeEnd();

        writer = writer.writeEnd();

        return writer.value;
    }
}