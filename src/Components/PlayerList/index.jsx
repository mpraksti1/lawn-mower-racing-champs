import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';
import DeleteIcon from 'react-icons/lib/md/clear';
import Text from '../../Elements/Text';
import Centered from '../../Elements/Centered';
import Button from '../../Elements/Button';
import { StyledTable, StyledDiv } from './styles';

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteModalShowing: false,
      selectedPlayer: '',
    };

    this.token = window.localStorage.token;
    this.retrievePlayers = this.retrievePlayers.bind(this);
    this.renderHeaderRow = this.renderHeaderRow.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.deleteThisPlayer = this.deleteThisPlayer.bind(this);
    this.setSelectedPlayer = this.setSelectedPlayer.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }

  componentDidMount() {
    this.retrievePlayers();
  }

  setSelectedPlayer(evt) {
    this.toggleDeleteModal();
    this.setState({
      selectedPlayer: evt.target.getAttribute('data-player'),
    });
  }

  async retrievePlayers() {
    const { retrievePlayers, alert } = this.props;
    try {
      await retrievePlayers(this.token);
    } catch (error) {
      alert.error(error.message);
    }
  }

  async deleteThisPlayer() {
    const { deletePlayer, alert } = this.props;
    const { selectedPlayer } = this.state;

    try {
      const deleteValue = await deletePlayer(selectedPlayer, this.token);
      if (deleteValue.success) {
        this.toggleDeleteModal();
        this.retrievePlayers();
        alert.success('Racer deleted!');
      }
    } catch (error) {
      alert.error(error.message);
    }
  }

  toggleDeleteModal() {
    const { deleteModalShowing } = this.state;

    this.setState({
      deleteModalShowing: !deleteModalShowing,
    });
  }

  renderHeaderRow() {
    const { headerNames } = this.props;
    const headerRowColumns = headerNames.map((colName, i) => {
      const replacedUnderscore = colName.replace(/_/g, ' ');
      // eslint-disable-next-line
      return <th key={i}>{ replacedUnderscore }</th>;
    });

    return (
      <tr>
        <th>Profile Img</th>
        {headerRowColumns}
        <th>&nbsp;</th>
      </tr>
    );
  }

  renderRows() {
    const { headerNames, players } = this.props;

    const generateProfilePic = (i) => {
      const MW = i % 2 === 0 ? 'men' : 'women';
      return `https://randomuser.me/api/portraits/${MW}/${i + 1}.jpg`;
    };

    if (players.length > 0) {
      return players.map((player, playersIndex) => {
        if (player) {
          const columns = headerNames.map((columnName, columnIndex) => {
            const playerTrait = player[columnName];
            const label = columnName.replace(/_/g, ' ');
            // eslint-disable-next-line
            return <td key={columnIndex} data-label={label}>{playerTrait}</td>;
          });

          return (
            <tr key={player.id}>
              <td className="profile-pic">
                <img
                  src={generateProfilePic(playersIndex)}
                  alt="icon"
                />
              </td>
              {columns}
              <td className="delete-player">
                { /* Using a data attr here because cypress doesn't like being passed any
                  of the other methods of binding 'this' to the current iteration */ }
                { /* eslint-disable */ }
                <Button className="delete" data-player={player.id} islink onClick={this.setSelectedPlayer}>
                { /* eslint-enable */ }
                  <DeleteIcon />
                </Button>
              </td>
            </tr>
          );
        }
        return null;
      });
    }

    return (
      <tr>
        <td colSpan="6">
          <Text
            xlg
            thin
            sans
            spaceAround
            alignCenter
            gray
            block
          >
            {'Uh oh... you haven\'t added any racers yet.'}
          </Text>
        </td>
      </tr>
    );
  }

  render() {
    const { deleteModalShowing } = this.state;
    return (
      <div>
        <StyledTable {...this.props} className="responsive-table">
          <thead>
            {this.renderHeaderRow()}
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </StyledTable>
        { deleteModalShowing && (
          <Centered fixed>
            <StyledDiv>
              <Text lg sans spaceAround block gray alignCenter>
                Are you sure you want to delete this racer?
              </Text>
              <div>
                <Button className="delete-confirm" green inline onClick={this.deleteThisPlayer}>
                  {'Yep, they\'re outta here!'}
                </Button>
                <Button outline inline onClick={this.toggleDeleteModal}>
                  Nah, I changed my mind.
                </Button>
              </div>
            </StyledDiv>
          </Centered>
        )}
      </div>
    );
  }
}

PlayerList.propTypes = {
  headerNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withAlert(PlayerList);
