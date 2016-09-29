/* eslint-env node */
/**
 * 
 * A Die represents a single physical 2 or 3 dimensional polygon
 * intended to be rolled to create a random result
 * 
 * @class Die
 * @param {number} faces - An array of die faces to represent
 * the geometry and values of each side of the die 
 * 
 * 
 */
function Die(die_faces) {
    
    const MINIMUM_DICE_SIDES = 2;
    

    /**
     * 
     * The values for each face of the die.  This value must be equal
     * to the value supplied in the 'sides' parameter.
     * 
     */
    var faces = die_faces || [];
    
    

    /**
     * @private first_face
     * 
     * Represents the first rolled face in this sequence.
     * 
     * This value, per sequence, should be treated as immutable.  It
     * is implemented as a singleton.  Its value is set by the 
     * roll() function, the first time it is called.  
     * 
     * 
     */
    var first_face;
    
    
    /**
     * @private current_face
     * 
     * Represents the currently showing face. 
     * Otherwise, set to undefined;  
     * 
     * Generally speaking, if this.getRolls() 
     * returns 0 you can safely expect this property 
     * to be falsy.
     * 
     * 
     */
    var current_face;
    
    
    /**
     * @private rolls
     * 
     * The total number of times this die has generated a random value
     * this sequence
     * 
     */
    var rolls = 0;  
    
    
    
    
    
    
    this.getCurrentRoll = function() {
        return rolls;
    };
    
    
    
    this.getFaces = function() {
        return faces;
    };
    
    
    this.getCurrentFace = function() {
        return current_face;
    };
    
    
    this.getFirstFace = function() {
        return first_face;
    };
    
    
    
    /**
     * 
     * The FirstFace is the first face rolled in this sequence.
     * This property is a singleton and should be treated as
     * immutable after the first roll of the die.
     * 
     * If this function is called after the die has already been rolled
     * the value will be unchanged and no exception or warning will be emitted.
     * 
     * @function setFirstFace()
     * @param {face}
     * 
     */
    var setFirstFace = function( face ) {
        if( first_face === undefined ) {
            first_face = face;
        }
    };
     
    
    
    var setCurrentFace = function( face ) {
        current_face = face;
    };
 
    
        
    /**
     * Takes a number and returns its square value
     *
     * @param {number} num - The number for squaring
     * @return the total number of rolls this die has
     * rolled this sequence.
     *
     * tfrom the currently provided faces.  
     * 
     * If this is the }first roll of the die, first_face is set.
     * This property should be treated as immutable.
     * 
     */
    this.roll = function(callback) {

        
        // Get random number and set the die face
        var rnd = Math.floor( Math.random() * faces.length );
        var face = faces[rnd];
        
 
        // Set the die state
        setFirstFace( face );
        setCurrentFace( face );
     
        rolls++;
        
        // Non blocking callback with defensive check
        if( callback && typeof callback === 'function' ) {
            var tid = setTimeout( 
                
                function(die){
                    
                    clearTimeout(tid); 
                    callback(die); 
                    
                }, 0, this
                
            );
        }

        // Chainable
        return this;
    };
    
    
    /**
     * 
     * Resets the state of the die to defaults.
     * 
     * 
     * @function resetRolls()
     * @return the number of times this dice has been
     * rolled.
     */
    this.resetRolls = function() {
        
        current_face    = undefined;
        first_face      = undefined;
        rolls           = 0;
        
    };
}

module.exports = Die;