<template>
    <div class="ratingselect">
        <div class="rating-type border-1px">
            <span @click="select(2)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}
                <span class="count">{{ratings.length}}</span>
            </span>
            <span @click="select(0)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}
                <span class="count">{{positives.length}}</span>
            </span>
            <span @click="select(1)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}
                <span class="count">{{negatives.length}}</span>
            </span>
        </div>
        <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
            <span class="icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2
const EVENT_TOGGLE = 'toggle'
const EVENT_SELECT = 'select'

export default {
    props: {
        ratings: {
            type: Array,
            default() {
                return [];
            }
        },
        selectType: {
            type: Number,
            default: ALL
        },
        onlyContent: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Object,
            default() {
                return {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                }
            }
        }

    },
    computed: {
        positives() {
            return this.ratings.filter((rating) => {
                return rating.rateType === POSITIVE;
            })
        },
        negatives() {
            return this.ratings.filter((rating) => {
                return rating.rateType === NEGATIVE;
            })
        }
    },
    methods: {
        select(type) {
            this.$emit(EVENT_SELECT, type)
        },
        toggleContent() {
            this.$emit(EVENT_TOGGLE)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
  @import "~common/stylus/variable"
    .ratingselect
        .rating-type
            padding 18px 0
            margin 0 18px
            font-size 0
            .block
                display inline-block
                padding 8px 12px
                margin-right 8px
                line-height: 16px
                border-radius 1px
                font-size 12px
                color: rgb(77,85,93)
                &.active
                    color #ffffff
                &.count
                    margin-left 2px
                    fontsize 8px
                &.positive
                    background-color: rgba(160,220,120,0.2)
                    &.active
                        background rgb(0,160,220)
                &.negative
                    background-color: rgba(77,85,93,0.2)
                    &.active
                        background: $color-grey
        .switch
            padding 12px 18px
            line-height 24px
            border-bottom 1px solid rgba(7,17,27,0.1)
            color: rgb(147,153,159)
            font-size 0
            &.on
                .icon-check_circle
                    color: #00c850
            .icon-check_circle
                margin-right 4px
                font-size: 24px
            .text
                font-size: 12px
            
</style>

