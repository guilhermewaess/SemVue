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
        &ltmodal modalId="modal1" modalType="basic" :showModal.sync="showBasicModal"&gt
          &ltdiv slot="header"&gtHello, i'm header&lt/div&gt
          &ltdiv slot="content"&gtHello, i'm content&lt/div&gt
          &ltdiv slot="footer"&gtHello, i'm footer&lt/div&gt
        &lt/modal&gt
      </pre>
    </div>
  
    <h3 class="ui header">Props</h3>
    <accordion accordionId="accordion-props" customClass="styled">
      <div class="title">
        <i class="dropdown icon"></i>
        modalId (String)
      </div>
      <div class="content">
        <p class="transition hidden">Is a div id for modal, could be usefull when you have more than one modal on page with different styles</p>
      </div>
  
      <div class="title">
        <i class="dropdown icon"></i>
        modalType (String | Not Required)
      </div>
      <div class="content">
        <div class="transition hidden">
          <p>Used to define what type of modal you want,
            <a href="https://semantic-ui.com/modules/modal.html#/examples">you can see all modal types here</a>
          </p>
          <pre>
                e.g.: modalType="basic"
                      modalType="fullscreen"
                default is empty<strong>(standard modal)</strong>
              </pre>
        </div>
      </div>
      <div class="title">
        <i class="dropdown icon"></i>
        showModal (Boolean)
      </div>
      <div class="content">
        <p class="transition hidden">Used to toggle modal visibility, start with false and change to true whenever you want to show modal</p>
      </div>
      <div class="title">
        <i class="dropdown icon"></i>
        closeable (Boolean | Not Required)
      </div>
      <div class="content">
        <div class="transition hidden">
          <p>Used to define if modal should closed with any click or force user to take some action</p>
          <p>Default value is
            <strong>true</strong>
          </p>
        </div>
      </div>
    </accordion>
  
    <modal modalId="basic-modal" modalType="basic" :showModal.sync="showBasicModal">
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
import { Modal, Accordion } from '@/semvue/index';

export default {
  name: 'ModalDoc',
  components: {
    Modal,
    Accordion,
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

