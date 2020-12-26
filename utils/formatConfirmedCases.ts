type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        [
          {
            attr: '公表_年月日'
            value: Date
          },
          {
            attr: '延べ数'
            value: number
          },
          {
            attr: '重症者'
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
            attr: '退院等'
            value: number
          },
          {
            attr: '死亡'
            value: number
          }
        ][]
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施件数: number
  陽性者数: number
  入院中: number
  重症者: number
  宿泊療養施設に入所中: number
  自宅療養中: number
  死亡: number
  退院等: number
}

type ChildDataType = {
  attr: string
  value: number
  children?: any
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
      if (data.children.length > 1) {
        data.children[data.children.length - 1].map((child: any) => {
          if (child.attr === key) {
            result = child.value
          }
        })
        return
      }
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
    重症者: getSelectedItem(data, '重症者'),
    宿泊療養施設に入所中: getSelectedItem(data, '宿泊療養施設に入所中'),
    自宅療養中: getSelectedItem(data, '自宅療養中'),
    死亡: getSelectedItem(data, '死亡'),
    退院等: getSelectedItem(data, '退院等'),
  } as ConfirmedCasesType
}
