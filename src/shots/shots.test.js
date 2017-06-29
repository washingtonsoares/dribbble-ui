import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './shots.actions'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const host = 'https://api.dribbble.com/v1'

axios.defaults.host = host
axios.defaults.adapter = httpAdapter

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_SHOTS_SUCCESS when fetching shots', () => {
		nock(host)
      .get(/shots/)
      .reply(200, [{id: 1}] )

    const expectedActions = [
      { type: 'FETCH_SHOTS' },
      { type: 'FETCH_SHOTS_SUCCESS', payload: [{id: 1}] }
    ]

    const store = mockStore({
			 shot: { }
		})

    return store.dispatch(actions.getShots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
