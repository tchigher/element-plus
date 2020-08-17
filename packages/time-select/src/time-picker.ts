import { h } from 'vue'
import Picker from './picker/picker.vue'
import TimePickPanel from './panel/time-pick.vue'
import TimeRangePanel from './panel/time-range.vue'
export default {
  name: 'ElTimePicker',
  props: {
    isRange: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const type = props.isRange ? 'timerange' : 'time'
    const panel = props.isRange ? TimeRangePanel : TimePickPanel
    return () => h(Picker, {
      props,
      type,
    },
    {
      default: (scopedProps) => h(panel, scopedProps),
    })
  },
}