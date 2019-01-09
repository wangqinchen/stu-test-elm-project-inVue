<template>
    <div class="tab">
        <div class="tab-item" >
            <router-link to="/goods" active-class="active" exact>商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings" active-class="active" exact>评论</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller" active-class="active" exact>商家</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tab
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item
        flex:1
        text-align center
        .active
            &:visited
                color: red
</style>
