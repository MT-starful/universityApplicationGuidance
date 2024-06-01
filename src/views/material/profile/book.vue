<template>
  <el-image :src="imgUrl" :preview-src-list="srcList" />

  <div class="item">
    <p class="title">高考天地使用大原则</p>
    <p>（1）
      <span class="important-description">
        今年能够填报的院校与专业，都只能从今年的高考天地中选取。今年高考天地所没有记录的院校或专业，都无法选择填报。
      </span>
    </p>
  </div>
  <div class="item">
    <p class="title">1.院校名称与校址</p>
  </div>

  <div class="item">
    <p class="title">2.院校代码</p>
    <p>（1）院校名称左侧的4位字符。院校代码是区分院校的唯一标识。</p>
    <p>
      （2）真实填报中填写的就是院校代码。
      <span class="important-description">填报中不同的院校代码即可认为是不同院校，哪怕院校名称相同。</span>
    </p>
    <p>
      <span>（3）因相同名称的院校可能存在多个不同的院校代码，填报专业时注意不可将其混填。</span>
      <span>例：高考天地中XXX大学存在A和B俩个院校代码，当填报了A的志愿，在选择该志愿的专业时，只能从高考天地中A底下列出的专业中选择，无法选择B底下列出的专业。</span>
      <span>若想选择B底下列出的专业，需另起一份志愿选择B。</span>
    </p>
  </div>

  <div class="item">
    <p class="title">3.院校代码招收人数</p>
    <p>（1）院校名称右侧的数字，单位：名。</p>
    <p>（2）代表该院校代码面向江西招收的总人数（注意：非该院校招收人数，因为一个院校可能存在多个不同的院校代码）。
    </p>
  </div>

  <div class="item">
    <p class="title">4.专业名称</p>
  </div>

  <div class="item">
    <p class="title">5.专业代码</p>
    <p>（1）专业名字左侧的2位字符。专业代码是区分专业的唯一标识。</p>
    <p>
      （2）与院校代码类似，真实填报中填写的就是专业代码。
      <span class="important-description">填报中不同的专业代码即可认为是不同专业，哪怕专业名称相同。</span>
    </p>
  </div>

  <div class="item">
    <p class="title">6.专业代码招收人数</p>
    <p>（1）专业名称右侧的数字，单位：名。</p>
    <p>
      （2）代表该院校代码的该专业代码面向江西招收的人数（注意：非该院校的该专业招收人数，因为一个院校的一个专业可能存在多个不同的专业代码）。
    </p>
    <p>（3）一个院校代码底下所列的所有专业的专业代码招收人数相加之和，即为该院校代码招收人数。</p>
  </div>

  <div class="item">
    <p class="title">7.学费</p>
    <p>（1）每条专业信息最右侧的括号内容，单位：元。</p>
    <p>（2）若无特别说明，<span class="important-description">该学费的缴纳周期为1年。</span></p>
  </div>

  <div class="item">
    <p class="title">8.备注</p>
    <p>（1）专业名称右侧或下方的括号内容。</p>
    <p>（2）通常为对该专业代码的补充描述，或该专业代码的额外录取要求。</p>
  </div>
</template>

<script>
export default {
  name: 'profileBook',
  data() {
    return {
      imgUrl: new URL('@/../public/image/book.jpg', import.meta.url).href,
      srcList: [new URL('@/../public/image/book.jpg', import.meta.url).href],
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  margin-bottom: 24px;

  p {
    margin: 0;
  }
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.important-description {
  color: red;
  text-decoration: underline;
}
</style>