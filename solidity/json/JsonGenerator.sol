library JsonWriter {
    using JsonWriter for string;

    struct Json {
        string value;
        uint depthBitTracker;
    }

    // json 1 level
    function writeStart(Json json) internal pure{
        json.value = '"{';
    }
    function writeString(Json json,string name,string value) internal pure{
        json.value += format("'{}':'{}',",name,value);
    }
    function writeStringNumber(Json json,string name,string value) internal pure {
        json.value += format("'{}':{},",name,value);
    }

    function writeEnd(Json json) internal pure returns (Json){
        json.value = json.value[:json.value.byteLength() - 1];
        json.value += '}"';
    }
    
    // array
    function writeStartArray(Json json, string name) internal pure  {
        json.value += format("'{}':[",name);
    }
    function writeEndArray(Json json) internal pure {
        json.value = json.value[:json.value.byteLength() - 1];
        json.value += "],";
    }
    function writeArrayString(Json json,string value) internal pure {
        json.value += format("'{}',",value);
    }
    function writeArrayNumber(Json json,string value) internal pure {
        json.value += format("{},",value);
    }
    // json 2 level
    function writeStartName(Json json,string name) internal pure {
        json.value += format("'{}':{",name);
    }

}