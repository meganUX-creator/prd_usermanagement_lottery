# UI 排版與防截斷防折行規範 (UI Styling & Anti-Truncation Rules)

為確保網頁 PRD 與原型介面在各尺寸螢幕與瀏覽器縮放比例下均維持精美與高可讀性，所有 UI 元件、操作按鈕、標籤膠囊與表格資料均須嚴格遵守以下防截斷與防意外換行排版規則：

## 1. 嚴禁按鈕、標籤與狀態膠囊字元截斷／中文字折行 (No Character Truncation / No Mid-Word Break)
- **單一按鈕或標籤絕不可單字換行**：
  - 嚴格禁止多字按鈕或膠囊標籤在渲染時因空間受限而中文字元折行（例如：`[重]` 換行至 `[置]`、`[通]` 換行至 `[過]` 等破版現象）。
  - 所有按鈕（`.btn`、`.btn-pill`）、狀態標籤（`.badge-tag`、`.status-pill`）、代碼膠囊（`.code-pill`）等行內標籤，必須一律設定：
    ```css
    white-space: nowrap;
    word-break: keep-all;
    display: inline-flex; /* 或 inline-block */
    align-items: center;
    flex-shrink: 0;
    ```

## 2. 按鈕組與標籤群容器規範 (Button Group & Pill Containers)
- 多個並列按鈕（如 `[通过]`、`[拒绝]`、`[重置]`）或多個狀態膠囊（如 `[启用]`、`[停用]`）：
  - 必須包裹在專用彈性容器內（如 `.btn-pill-group`），設置 `gap: 6px` 與 `white-space: nowrap; flex-wrap: nowrap;`。
  - 嚴禁直接在 `<td>` 中放入多個裸露 `<span>`，避免瀏覽器在空白處強制自動換行。

## 3. 表格欄位寬度與換行防護 (Table Columns & Minimum Widths)
- **表頭與欄位寬度預留**：
  - 凡包含按鈕組、狀態標籤或複合資訊的表格欄位（如「介面展示值」、「操作」、「狀態」等），表頭必須給予充足寬度（例如 `>= 180px`），並在 `<th>` 加上 `white-space: nowrap;`。
  - 避免將包含 3 個以上按鈕的群組塞入 `<= 140px` 的狹窄欄位內。

## 4. 適用樣式類別參考 (Standard Utility Classes)
- 按鈕組容器：`.btn-pill-group`
- 成功/通過按鈕：`.btn-pill.btn-pill-success`
- 危險/拒絕按鈕：`.btn-pill.btn-pill-danger`
- 次要/重置按鈕：`.btn-pill.btn-pill-secondary`
- 啟用狀態膠囊：`.status-pill.status-pill-success`
- 停用狀態膠囊：`.status-pill.status-pill-danger`
