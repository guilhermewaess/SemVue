<template>
  <div class="ui container">
    <h1 class="ui dividing header">Modal</h1>
  
    <p>Modal component,
      <a href="https://semantic-ui.com/modules/modal.html"> you can see all documentation here</a>
    </p>
  
    <div class="ui bottom button" @click="changeModalStatus('showLongModal',true)">
      <span>Try standard modal</span>
    </div>
  
    <div class="ui bottom button" @click="changeModalStatus('showBasicModal',true)">
      <span>Try basic modal</span>
    </div>
  
    <div class="ui segment">
      <pre>
          import { Modal } from 'semvue';

          export default {
            name: 'ModalDoc',
            components: {
              Modal,
            },
          }
      </pre>
    </div>
  
    <p>Note that you'll need provide a var to control the visibility of modal and configure the tree base parts of modal: header, content, actions</p>
  
    <div class="ui segment">
      <pre>
        &ltmodal modalId="modal1" type="basic" :showModal.sync="showBasicModal"&gt
          &ltdiv slot="header"&gtHello, i'm header&lt/div&gt
          &ltdiv slot="content"&gtHello, i'm content&lt/div&gt
          &ltdiv slot="footer"&gtHello, i'm footer&lt/div&gt
        &lt/modal&gt
      </pre>
    </div>
  
    <h3 class="ui header">Props</h3>
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
          <td>modalId</td>
          <td>String</td>
          <td>Yes</td>
          <td>-</td>
          <td>Is a div id for modal</td>
        </tr>
        <tr>
          <td>showModal</td>
          <td>Boolean</td>
          <td>Yes</td>
          <td>-</td>
          <td>Used to control modal visibility</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>No</td>
          <td>String empty (standard modal)</td>
          <td>The type of modal.
            <a href="https://semantic-ui.com/modules/modal.html"> You can see all types here</a>
          </td>
        </tr>
        <tr>
          <td>closeable</td>
          <td>Boolean</td>
          <td>No</td>
          <td>true</td>
          <td>Used to define if should closed with any click out of modal or force user to take some action</td>
        </tr>
      </tbody>
    </table>
  
    <modal modalId="basic-modal" type="basic" :showModal.sync="showBasicModal">
      <div slot="header">Hello, i'm header</div>
      <div slot="content">Hello, i'm content</div>
      <div slot="footer">Hello, i'm footer</div>
    </modal>
  
    <modal modalId="long-modal" :showModal.sync="showLongModal">
      <div slot="header">Hello, i'm header</div>
      <div slot="content">Hello, i'm content</div>
      <div slot="footer">Hello, i'm footer</div>
    </modal>
  
  </div>
</template>

<script>
import { Modal } from '@/semvue/index';

export default {
  name: 'ModalDoc',
  components: {
    Modal,
  },
  data() {
    return {
      showBasicModal: false,
      showLongModal: false,
    };
  },
  methods: {
    changeModalStatus(visibilityProperty, showModal) {
      this[visibilityProperty] = showModal;
    },
  },
};
</script>

<style lang="less" scoped>
.segment {
  padding: 0!important;
}

pre {
  margin: 0!important;
}
</style>

