library JsonWriter {
    using JsonWriter for string;

    struct Json {
        string value;
        uint depthBitTracker;
    }

    // json 1 level
    function writeStart(Json json) internal pure returns (Json){
        json.value = '"{';
        return json;
    }
    function writeString(Json json,string name,string value) internal pure returns (Json){
        json.value += format("'{}':'{}',",name,value);
        return json;
    }
    function writeStringNumber(Json json,string name,string value) internal pure returns (Json){
        json.value += format("'{}':{},",name,value);
        return json;
    }

    function writeEnd(Json json) internal pure returns (Json){
        json.value = json.value[:json.value.byteLength() - 1];
        json.value += '}"';
        return json;
    }
    
    // array
    function writeStartArray(Json json, string name) internal pure returns (Json) {
        json.value += format("'{}':[",name);
        return json;
    }
    function writeEndArray(Json json) internal pure returns (Json) {
        json.value = json.value[:json.value.byteLength() - 1];
        json.value += "],";
        return json;
    }
    function writeArrayString(Json json,string value) internal pure returns (Json){
        json.value += format("'{}',",value);
        return json;
    }
    function writeArrayNumber(Json json,string value) internal pure returns (Json){
        json.value += format("{},",value);
        return json;
    }
    // json 2 level
    function writeStartName(Json json,string name) internal pure returns (Json){
        json.value += format("'{}':{",name);
        return json;
    }

}