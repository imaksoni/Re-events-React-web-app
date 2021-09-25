import {delay} from '../common/util/util'
import {sampleData} from './SampleData'

export function fetchSanpleData(){
    return delay(1000).then(function(){
        return Promise.resolve(sampleData)
    })
}