// ページ上のevenまたはoddクラスが付与された<tr>要素を取得
let trElements = document.querySelectorAll('tr.even, tr.odd');

if (trElements = null) {
    console.error('tr elements are not found.')
} else{
    console.log('OK')
}

// trElementsがNodeListであるかを確認し、それに基づいて処理を行う
if (trElements.length > 0) {
    trElements.forEach(tr => {
        // 各<tr>要素の子要素である6番目の<td>要素を取得
        const targetTd = tr.querySelectorAll('td')[5];

        // <td>要素のテキストから年月日時間情報を抽出してコンソールに表示
        function extractDateTimeFromText(text) {
            const dateTimeRegex = /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/; // 正規表現で年月日時間情報を抽出
            const match = text.match(dateTimeRegex);
            if (match) {
                const year = match[1];
                const month = match[2];
                const day = match[3];
                const hour = match[4];
                const minute = match[5];
                const second = match[6];
                return `${year}-${month}-${day} ${hour}:${minute}:${second}`; // 年月日時間の形式で情報を返す
            }
            return null; // マッチが見つからない場合はnullを返す
        }

        // <td>要素のテキストから年月日時間情報を抽出してコンソールに表示
        if (targetTd) {
            const text = targetTd.textContent;
            const extractedDateTime = extractDateTimeFromText(text);
            if (extractedDateTime) {
                console.log(extractedDateTime);
            }
        }
    });
} else {
    console.error('No matching <tr> elements found.');
}
