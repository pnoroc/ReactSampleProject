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

		it('should render properly', () => {

			expect(
				shallow(
					<Users />
				).length
			).toEqual(1)
		});

		it('should call componentWillMount', () => {
			spyOn(Users.prototype, 'componentWillMount');
		    const wrapper = mount(<Users />);
		    expect(Users.prototype.componentWillMount).toHaveBeenCalled();
		});
		it('should set users and groups steate', () => {

		    const wrapper = mount(<Users />);
		    expect(wrapper.state('users').length).toBeGreaterThan(0);
		    expect(wrapper.state('groups').length).toBeGreaterThan(0);

		});

		it('should render User components',() => {
			const wrapper = shallow(<Users />);
			expect(wrapper.find('tbody').children().length)
				.toEqual(
					wrapper.state('users').length
				);
		});
		it('should render CreateUser component', () => {
			const wrapper = mount(<Users />);
			expect(wrapper.find('#create_user_btn').length).toEqual(1);
		});
		it('should render AssignUser component', () => {
			const wrapper = mount(<Users />);
			expect(wrapper.find('#user_assign_modal').length).toEqual(1);
		});

	})

	describe('Users manipulation', () => {

		it('should get all items selected before action', () =>{

			// spyOn(Users.prototype, 'getCheckedUsers')
			// const wrapper = mount(<Users />)
			// const removeBtn = wrapper.find('#remove_users_btn');

			// Simulate.click(removeBtn);

			// expect(Users.prototype.getCheckedUsers).toHaveBeenCalled();


		})

		describe('Remove users', () => {



		})

	})

})