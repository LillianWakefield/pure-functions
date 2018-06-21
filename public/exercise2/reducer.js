let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	
	let { type, counterIndex } = action;
	
	let stateCopy = {
		...state,
		counters: [...state.counters]
	};

	if (type == "INCREMENT") {
		stateCopy.counters[counterIndex]++;
		return stateCopy;
		//return {
		//	counters: [
		//	...state.counters.slice(0, counterIndex),
		//	state.counters[counterIndex],
		//	...state.counter.slice(counterIndex+1)
		//]
		//}
	} else if (type == "ADD_COUNTER") {
		stateCopy.counters.push(0);
		return stateCopy;
		//return{
		//	counters: state.counters.concat(0)
		//}
	} else {
		return stateCopy;
	}
}
