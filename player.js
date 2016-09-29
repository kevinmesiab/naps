/* eslint-env node */
/**
 * @class Player
 * 
 * A Player represents a user of the game.
 * 
 * TODO: Change to json object for quick serialization and auth
 * 
 */
function Player(id) {
    
    if( !id ) throw new Error('Cannot resolve the player with the ID {id}');
    
    var bankroll = 1000;
    
    /*
     * User Meta
     */
    this.id = id;
    this.avatar;
    this.nickname;
    this.firstname;
    this.lastname;
    this.joindate;
    this.is_rolling;
    
    
    
    /**
     * Returns this player's current bankroll
     * 
     * @function getBankRoll()
     * 
     */
    this.getBankRoll = function() {
        return bankroll;
    };
    
    
    
    /**
     * 
     * Adjusts the player's bankroll accordingingly via
     * the results of betting during game play.  
     * 
     * @function adjustBankRoll
     * @param {number} amount : A positive or negative number to apply
     * this user's bank roll.
     * 
     * @param {function} Optional callback after adjusted bankroll. This callback
     * takes a single parameter, this player object.
     * 
     */
    this.adjustBankRoll = function(amount, callback) {
        
        bankroll = bankroll + amount;
        
        if( callback ) {
            callback( this );
        }
        
        if( bankroll < 1 ) {
            throw 'Bankrupted with a debt of {bankroll}.';
        }
        
   
        return {
            "player" : this,
            "amount" : amount,
            "bankroll" : this.getBankRoll()
        };

            
    }
    
}