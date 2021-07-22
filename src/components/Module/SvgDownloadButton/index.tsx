import React from 'react'
import Button from '../../../components/Atoms/Button'
interface Props {
  label?:string
  data?: any
  fileName?: string
  buttonColor?: 'primary' | 'error' | 'success' | 'dark'
  radius?: boolean
  isShadow?:boolean
}

export const SVGDownloadButton: React.FC<Props> = ({
  label,
  data,
  fileName,
  buttonColor,
  radius,
  isShadow
}) => {
  const downloadCSV = () => {
    //CSV 파일명
    const filename = `${fileName}.csv`
    //BOM부여（Excelでの文字化け対策）
    /*
      바이트 순서 표시 (byte order mark) 또는 바트 순서 마크 (바이트 쥰 마크)은 통칭 BOM 라고하는, 
      Unicode인코딩 형식으로 인코딩 된 텍스트의 시작 부분에 붙이는 몇 바이트의 데이터이다. 
      이 데이터를 바탕으로 Unicode로 인코딩되어 있는지 및 코딩의 종류를 판별하는 데 사용한다.

      Uint8Array 는 "UTF-8"이라는 문자 코드.

      "UTF-8 파일이에요"라는 것을 나타 내기 위해 파일의 시작으로 설정하는 경우에는
      이를 8 비트 부호없는 정수 값을 표현할 수있는 Uint8Array에서 이진 데이터로 설정하는 것 같다.
    */
    const bom = new Uint8Array([0xef, 0xbb, 0xbf])
    //Blobで데이터 작성
    /*
      Blob은 Binary Large OBject의 약자이며, 바이너리 데이터를 나타내는 개체이다.

      Web상에서 파일 전송을하는 FileAPI에도이 Blob가 이용되고 있으며,
      파일을 출력 할 때에도이 Blob를 이용하여 파일을 생성.

      Blob 파일을 생성하려면 첫 번째 인수에 배열로 설정하고 싶은 데이터를
      두 번째 인수 MIME 타입을 지정하는 방식으로 파일을 생성.
    */
    const blob = new Blob([bom, data], { type: "text/csv" })
    //Blob에서 URL 작성
    /*
      URL 인터페이스의 createObjectURL 메소드를 사용하여
      지정된 File, Blob, MediaSource 등의 객체를 참조 할 수있는 URL을 발행.

      이번에는 그 URL을 a 요소의 href 속성에 세트하고 click 이벤트를 발화시키는 것으로
      자동으로 다운로드 할 수있는 구조로 작동.
    */
    const url = (window.URL || window.webkitURL).createObjectURL(blob)
    //링크 작성
    const download = document.createElement("a")
    // 작성한 URL 할당
    download.href = url
    //다운로드 파일명 설정
    download.download = filename
    // 다운로드클릭 
    download.click();
    
    (window.URL || window.webkitURL).revokeObjectURL(url)
  }
  return (
    <Button 
      label={label}
      onClick={downloadCSV}
      buttonColor={buttonColor}
      radius={radius}
      isShadow={isShadow}
    />
  )
}

export default SVGDownloadButton