    import { ADD_COUPLE, addCouple } from "../store/reducer/coupleReducer";
    import { setDragonError, setKnightError } from "../store/action/index";

    const coupleMiddleware = (store) => (next) => (action) => {
    if (action.type === ADD_COUPLE) {
        const { dragonId, knightId } = action.payload;
        const { couples } = store.getState().coupleReducer;

        const isDragonInCouple = couples.some(
        (couple) => couple.dragonId === dragonId
        );
        const isKnightInCouple = couples.some(
        (couple) => couple.knightId === knightId
        );

        if (isDragonInCouple) {
        store.dispatch(setDragonError("This dragon is already in a couple."));
        return;
        }

        if (isKnightInCouple) {
        store.dispatch(setKnightError("This knight is already in a couple."));
        return;
        }
    }

    return next(action);
    };

    export default coupleMiddleware;
