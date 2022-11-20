export const Form = () => {
  return (
    <form method="post" action="https://hyperform.jp/api/RCC4ie5v">
      <div>
        <label>お名前</label>
        <input type="text" name="お名前" placeholder="例）山田太郎" required />
      </div>
      <div>
        <label>メールアドレス</label>
        <input type="email" name="email" placeholder="例）example@example.com" required />
      </div>
      <div>
        <label>お問い合わせ内容</label>
        <textarea name="お問い合わせ内容" required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>
  );
};
