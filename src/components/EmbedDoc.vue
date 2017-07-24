<template>
  <div class="ui container">
    <h1 class="ui dividing header">Embed</h1>
  
    <p>Embed component,
      <a href="https://semantic-ui.com/modules/embed.html"> you can see all documentation here</a>
    </p>
  
    <div class="ui equal width center aligned grid">
      <div class="column">
        Youtube example
        <SemVueEmbed embedId="youtube-embed"
                     dataUrl="https://www.youtube.com/embed/lG0Ys-2d4MA"></SemVueEmbed>
      </div>
      <div class="column">
        Facebook example
        <SemVueEmbed embedId="facebook-embed"
                     dataUrl="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBotangle%2Fvideos%2F981470695232233%2F"></SemVueEmbed>
      </div>
    </div>

    <h3 class="ui dividing header">Usage</h3>
        *&ltembed&gt is a reserved html tag, so don't forget to use sem-vue-embed tag*
        <div class="ui segment code">
            <pre>
            import { SemVueEmbed } from '@/semvue'; 

            export default {
                components: {
                    SemVueEmbed,
                },
            }
            </pre>
        </div>

        <div class="ui segment code">
            <pre>
            &ltSemVueEmbed embedId="youtube-embed" dataUrl="https://www.youtube.com/embed/lG0Ys-2d4MA"&gt&lt/SemVueEmbed&gt
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
                    <td>embedId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Is a div id for embed</td>
                </tr>
                <tr>
                    <td>dataUrl</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>Embed url from video</td>
                </tr>
                <tr>
                    <td>dataPlaceholder</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String Empty</td>
                    <td>Placeholder path to use with video</td>
                </tr>
                <tr>
                    <td>autoplay</td>
                    <td>Boolean</td>
                    <td>No</td>
                    <td>false</td>
                    <td>Used to define if should play automatic on component load</td>
                </tr>
                <tr>
                    <td>curstomClass</td>
                    <td>String</td>
                    <td>No</td>
                    <td>String empty</td>
                    <td>Used to put any aditional class inside progress div </br>
                        e.g. class="ui customClass embed"
                    </td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>No</td>
                    <td>Object empty</td>
                    <td>Overrides component options.
                        <a href="https://semantic-ui.com/modules/embed.html"> You can see all options here</a>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>


<script>
import { SemVueEmbed } from '@/semvue';

export default {
  name: 'EmbedDoc',
  components: {
    SemVueEmbed,
  },
};
</script>

<style lang="less" scoped>
.code {
  padding: 0!important;
}
</style>
