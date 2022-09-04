# Обработка ошибок localStorage, sessionStorage, IndexedDB

#storage

Давайте перефразирую: обернули ли вы в try-catch все ваши вызовы localStorage, sessionStorage, IndexedDB? Нет? А почему?

Почему я до сих пор в тестовых вижу сырые вызовы localStorage? Опустим тот факт, что многие там ещё и токены хранят…

Так вот: если пользователь отключит куки, он получит такое веселье, как на скриншоте выше. И пустой экран заодно. Оно вам надо? Обработайте ошибку и предупредите нормально.

## Bad
```
const storeSettings = async (input) => {
  const settings = await getSettings();
  settings[input.id] = input.type === 'range' ? input.value : input.checked;
  await set(
    colorRadio.checked ? COLOR_SETTINGS : MONOCHROME_SETTINGS,
    settings,
  );
}
```
## Good
```
try {
    const settings = await getSettings();
    settings[input.id] = input.type === 'range' ? input.value : input.checked;
    await set(
      colorRadio.checked ? COLOR_SETTINGS : MONOCHROME_SETTINGS,
      settings,
    );
  } catch (err) {
    // Do nothing. The user probably blocks cookies.
  }
};
```