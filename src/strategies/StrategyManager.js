class StrategyManager {
    constructor() {
        this._strategies = []
    }
    add( strategy ) {
        return this._strategies.push(strategy);
    }
    remove(strategy) {
        return this._strategies.pop(strategy);
    }
}
