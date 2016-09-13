import React from "react";
import { shallow, mount, render } from "enzyme";
import expect, {spyOn} from "expect";
import { Simulate } from 'react-addons-test-utils';

import Users from "./Users";


import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView


describe('Components: Users', () => {

	describe('Component initiating', () => {

		let wrapper;

		beforeEach(() => {

			spyOn(Users.prototype, 'componentWillMount');
			wrapper = mount(<Users />);
		})

		it('should render properly', () => {

			expect(
				shallow(
					<Users />
				).length
			).toEqual(1)
		});

		it('should call componentWillMount', () => {
		    
		    expect(Users.prototype.componentWillMount).toHaveBeenCalled();
		});
		it('should set users and groups steate', () => {

		    
		    expect(wrapper.state('users').length).toBeGreaterThan(0);
		    expect(wrapper.state('groups').length).toBeGreaterThan(0);

		});

		it('should render User components',() => {
			const shallowedWrap = shallow(<Users />);
			expect(shallowedWrap.find('tbody').children().length)
				.toEqual(
					shallowedWrap.state('users').length
				);
		});
		it('should render CreateUser component', () => {
			
			expect(wrapper.find('#create_user_btn').length).toEqual(1);
		});
		it('should render AssignUser component', () => {
			
			expect(wrapper.find('#user_assign_modal').length).toEqual(1);
		});

	})

	describe('Users manipulation', () => {

		let wrapper;

		beforeEach(() => {
			spyOn(Users.prototype, 'removeUsers')
			
			wrapper = mount(<Users />);
		})

		it('should trigger removeUsers on click', () => {

			const removeBtn = wrapper.find('#remove_users_btn');

			removeBtn.simulate('click');

			expect(Users.prototype.removeUsers).toHaveBeenCalled();
		})


	})

})