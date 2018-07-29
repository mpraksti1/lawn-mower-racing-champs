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

  setSelectedPlayer(id) {
    this.toggleDeleteModal();
    this.setState({
      selectedPlayer: id,
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
    const headerRowColumns = headerNames.map((colName) => {
      const replacedUnderscore = colName.replace(/_/g, ' ');
      console.log('key1', colName);
      return <th key={colName}>{ replacedUnderscore }</th>;
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

    const generateRandomProfilePic = () => {
      const rng = () => Math.ceil(Math.random() * 50);

      const rngMW = rng() < 25 ? 'men' : 'women';
      const randomUser = rng();
      return `https://randomuser.me/api/portraits/${rngMW}/${randomUser}.jpg`;
    };

    if (players.length > 0) {
      return players.map((player) => {
        if (player) {
          const columns = headerNames.map((columnName, i) => {
            const playerTrait = player[columnName];
            const label = columnName.replace(/_/g, ' ');

            console.log('key2', i);
            // eslint-disable-next-line
            return <td key={i} data-label={label}>{playerTrait}</td>;
          });

          console.log('key3', player.id);
          return (
            <tr key={player.id}>
              <td className="profile-pic">
                <img
                  src={generateRandomProfilePic()}
                  alt="icon"
                />
              </td>
              {columns}
              <td className="delete-player">
                <Button islink onClick={() => this.setSelectedPlayer(player.id)}>
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
        <StyledTable className="responsive-table">
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
              <Text lg sans spaceAround block gray>Are you sure?</Text>
              <div>
                <Button green inline onClick={this.deleteThisPlayer}>Yes</Button>
                <Button outline inline onClick={this.toggleDeleteModal}>No</Button>
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
