import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const UserItem = ({user:{login,avatar_url}}) => {

        return (
          <Card className='kamal' style={{ width: '14rem' }}>
            <Link to='/users'><Card.Img variant="top" src={avatar_url} ></Card.Img></Link>
            <Card.Body>
              <Card.Title>{login}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      }
      
 UserItem.propTypes={
  user:PropTypes.object.isRequired,
 }


export default UserItem
