import React from 'react'
import { mount } from 'enzyme'
import Shot from './shot'

function setup() {
  const props = {
    shot: {
			id: 1,
			title: 'shot title',
			images: [],
			user: {
				name: 'name',
				username: 'username',
				avatar_url: 'http://avatar.com'
			}
		}
  }

  const enzymeWrapper = mount(<Shot {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Shot', () => {
	it('should render shot', () => {
		const { enzymeWrapper } = setup()

		expect(enzymeWrapper.find('.shot-author').text()).toEqual('name');
	})

})
