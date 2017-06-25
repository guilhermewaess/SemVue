<template>
  <div class="ui container">
    <h1 class="ui dividing header">Rating</h1>
  
    <p>Rating component,
      <a href="https://semantic-ui.com/modules/rating.html"> you can see all documentation here</a>
    </p>
  
    <div class="ui large label">
      Rating the stars:
      <div class="detail">
        <rating ratingId="ratingDoc" :type="type" customClass="big" :currentRating.sync="currentRating" :maxRating="5"></rating>
      </div>
    </div>
  
    <div class="ui buttons">
      <button class="ui button" @click="changeIconType('heart')">Heart Icons</button>
      <button class="ui button" @click="changeIconType('star')">Stars Icons</button>
    </div>
  
    <div class="ui buttons">
      <button class="ui left attached icon button" @click="decreaseRating">
        <i class="left arrow icon"></i>
      </button>
      <div class="ui disabled button">
        Current Rate: {{ currentRating }}
      </div>
      <button class="ui right attached icon button" @click="increaseRating">
        <i class="right arrow icon"></i>
      </button>
    </div>
  
    <h3 class="ui dividing header">Usage</h3>
    <div class="ui segment code">
      <pre>
          import { Rating } from 'semvue';

          export default {
              components: {
                  Rating,
              },
          }
      </pre>
    </div>
    <div class="ui segment code">
      <pre>
        &ltrating ratingId="ratingDoc" :type="type" customClass="big" :currentRating.sync="currentRating" :maxRating="5"&gt&lt/rating&gt
      </pre>
    </div>
  
    <h3 class="ui dividing header">Props</h3>
    <table class="ui definition table">
      <thead>
        <tr>
          <th></th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ratingId</td>
          <td>String</td>
          <td>Yes</td>
          <td>-</td>
          <td>Is a div id for rating</td>
        </tr>
        <tr>
          <td>currentRating</td>
          <td>Number</td>
          <td>Yes</td>
          <td>-</td>
          <td>Used to control current rating (also used to define initial rating)</td>
        </tr>
        <tr>
          <td>maxRating</td>
          <td>Number</td>
          <td>Yes</td>
          <td>-</td>
          <td>The max rating icons of component</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>No</td>
          <td>String empty (standard rating)</td>
          <td>The type of rating.
            <a href="https://semantic-ui.com/modules/rating.html"> You can see all types here</a>
          </td>
        </tr>
        <tr>
          <td>curstomClass</td>
          <td>String</td>
          <td>No</td>
          <td>String empty</td>
          <td>Used to put any aditional class inside rating div </br>
            e.g. class="ui customClass rating"
          </td>
        </tr>
        <tr>
          <td>options</td>
          <td>Object</td>
          <td>No</td>
          <td>Object empty</td>
          <td>Overrides default component options.<a href="https://semantic-ui.com/modules/rating.html"> You can see all options here</a></td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>


<script>
import { Rating } from '@/semvue';

export default {
  name: 'RatingDoc',
  components: {
    Rating,
  },
  data() {
    return {
      currentRating: 1,
      type: 'star',
    };
  },
  methods: {
    changeIconType(type) {
      this.type = type;
    },
    increaseRating() {
      if (this.currentRating === 5) {
        this.currentRating = 0;
      } else {
        this.currentRating += 1;
      }
    },
    decreaseRating() {
      if (this.currentRating === 0) {
        this.currentRating = 5;
      } else {
        this.currentRating -= 1;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.code {
  padding: 0!important;
}
</style>
