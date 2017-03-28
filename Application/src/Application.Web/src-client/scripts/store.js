export const STORE = {
	_data: {
    currentView: '',
		routeParams: {},
		listData: [],
		currentUser: {},
		listToPost: {}
	},

	getStoreData: function(){
		return this._data
	},

  setStore: function(storeProp, propLoad){
		if (typeof this._data[storeProp] === 'undefined' ){
			throw new Error('Cannot set property that does not exist on STORE._data')
		}

		this._data[storeProp] = propLoad

		if(typeof this._callMeLaterPls === 'function'){
			this._callMeLaterPls()
		}
  },

  onStoreChange: function(cbFunc){
		if(typeof cbFunc !== 'function'){
			throw new Error('argument to store must be a FUNCTION')
		}

		if(typeof this._callMeLaterPls === 'function'){
			throw new Error('Store is already listening')
		}

		this._callMeLaterPls = cbFunc
	}
}
