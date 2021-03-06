import { linkData, linkState } from "../interfaces/interfaces";

type linksAction = 
| { type: 'addLink', payload: linkData}

export const linksReducer = (state: linkState, action: linksAction): linkState => {

  switch (action.type) {
    case 'addLink':
      return{
        ...state,
        links: [ action.payload,...state.links ]
      }

    default:
    return state;
  }
}