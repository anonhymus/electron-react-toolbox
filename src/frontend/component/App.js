import React from 'react';
import { ThemeProvider } from 'react-css-themr';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import {Button} from 'react-toolbox/lib/button'; // Bundled component import
import theme from './actionButton.css';
import Dropdown from 'react-toolbox/lib/dropdown';
import Modal from './modal/Modal';
import TableTest from './TableTest';


import {
  List, ListItem, ListSubHeader, ListDivider, ListCheckbox
} from 'react-toolbox/lib/list';

const countries = [
  {value: 'EN-gb', label: 'England'},
  {value: 'ES-es', label: 'Spain'},
  {value: 'TH-th', label: 'Thailand'},
  {value: 'EN-en', label: 'USA'}
];


export default class App extends React.Component {

  state = {
    active: false,
    value: 'ES-es',
    check1: true, check2: false
  };

  handleChangeCheckBox = (field, value) => {
    console.log('change');
    this.setState({...this.state, [field]: value});
  };

  handleChange = (value) => {
    this.setState({value: value});
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  actions = [
    {label: 'Cancel', onClick: this.handleToggle, raised: true, primary: true},
    {label: 'Save', onClick: this.handleToggle, theme: theme}
  ];

  listTest = () => (
      <List selectable ripple>
        <ListSubHeader caption='Explore characters'/>
        <ListItem
            caption='Dr. Manhattan'
            legend="Jonathan 'Jon' Osterman"
            rightIcon='star'
        />
        <ListItem
            caption='Ozymandias'
            legend='Adrian Veidt'
            rightIcon='star'
        />
        <ListItem
            caption='Rorschach'
            legend='Walter Joseph Kovacs'
            rightIcon='star'
        />
        <ListSubHeader caption='Configuration'/>
        <ListCheckbox checked={this.state.check1}
                      caption='Notify new comics'
                      legend='You will receive a notification when a new one is published'
                      onChange={this.handleChangeCheckBox.bind(this, 'check1')}/>
        <ListDivider />
        <ListItem caption='Contact the publisher' leftIcon='send'/>
        <ListItem caption='Remove this publication' leftIcon='delete'/>
      </List>
  );

  render() {
    const actions2 = [
      <Button label='Primary Button' primary onClick={this.handleToggle}/>
    ];
    return (
        <div>
          <PurpleAppBar />
          <section style={{padding: 20}}>
            <SuccessButton label='Success' primary raised/>
            <Button label='Primary Button' primary onClick={this.handleToggle}/>
          </section>
          {this.listTest()}
          <Modal
              title='My awesome dialog'
              actions={this.actions}
              active={this.state.active}
              onEscKeyDown={this.handleToggle}
              onOverlayClick={this.handleToggle}
          >
            <TableTest/>
            <Button label='Primary Button' primary onClick={this.handleToggle}/>
          </Modal>

          <Dropdown
              auto
              onChange={this.handleChange}
              source={countries}
              value={this.state.value}
          />
        </div>

    );
  }
}

