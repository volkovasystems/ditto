/*
  Object.defineProperty( module, property,
    {
      "configurable": true,
      "get": function get( ){
        var currentVersionMethod;
        var methodList = { };
        registerInterval( "module-update:" + module.name + "." + property )
        //[UPDATE PROCEDURES HERE]
        return currentVersionMethod;
      }
    } );
    
    Inside update procedure block:
    1. Get the current version for the function.
    2. Access the remote and ask if there are new versions for that.
    3. Remodify the function.
    
    In cases that the function is part of the object,
    1. Everytime the object is created, keep track of it.
    2. Reinsert the new version of the function if there are updates
      on the tracked object.
*/
/*:
    @include:
        {
            
        }
    @end-include
*/
ditto = function ditto( module, updateURI ){
    var property;
    //Check if the module is class by naming convention.
    if( ( /^[A-Z]/ ).test( module.name ) ){
        //This is a class.
    }else{
        /*
            All modules not a class should either register
                through window or global property.
        */
        property = module;
        switch( environment ){
            case "browser":
                window.name = "window";
                module = window;
                break;
                
            case "nodejs":
                global.name = "global";
                module = global;
                break;
                
            default:
                throw new Error( "cannot determine environment" );
        }
        
        
    }
};