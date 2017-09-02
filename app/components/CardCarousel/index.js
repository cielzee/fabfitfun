import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Card, Image } from 'semantic-ui-react'

function CardCarousel(props) {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="carousel"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Card key={props.id}>
          <Image size='small' src={props.thumbnail} centered style={styles.image}/>
          <Card.Content>
            <Card.Header>
              {props.name}
            </Card.Header>
          </Card.Content>
        </Card>
      </CSSTransitionGroup>
    </div>
  );
}

export default CardCarousel;
