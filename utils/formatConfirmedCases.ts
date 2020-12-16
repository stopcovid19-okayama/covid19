type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '入院調整中'
          value: number
        },
        {
          attr: '入院中'
          value: number
        },
        {
          attr: '宿泊療養施設に入所中'
          value: number
        },
        {
          attr: '自宅療養'
          value: number
        },
        {
          attr: '調査中'
          value: number
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施件数: number
  陽性者数: number
  入院中: number
  /*
  軽症中等症: number
  */
  重傷者: number
  宿泊療養施設に入所中: number
  自宅療養中: number
  /*
  調査中: number
  */
  死亡: number
  退院等: number
}

interface ChildData {
  attr: string
  value: number
}

type ChildDataType = {
  attr: string
  value: number
  children?: ChildData[]
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
  const recursiveSearch = (data: ChildDataType) => {
    if (result) {
      return
    }
    if (data.attr === key) {
      result = data.value
    } else if (data.children) {
      data.children.forEach((child: ChildDataType) => {
        if (result) {
          return
        }
        recursiveSearch(child)
      })
    }
  }
  recursiveSearch(data)

  return result || 0
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    検査実施件数: getSelectedItem(data, '検査実施件数'),
    陽性者数: getSelectedItem(data, '陽性者数'),
    入院中: getSelectedItem(data, '入院中'),
    重傷者: getSelectedItem(data, '重傷者'),
    宿泊療養施設に入所中: getSelectedItem(data, '宿泊療養施設に入所中'),
    自宅療養中: getSelectedItem(data, '自宅療養中'),
    死亡: getSelectedItem(data, '死亡'),
    退院等: getSelectedItem(data, '退院等')
  } as ConfirmedCasesType
}
