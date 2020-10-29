<template>
  <div class="left-sidebar">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol viewBox="0 0 24 24" id="chat_outline"><path d="M0 0h24v24H0V0z" fill="none" /><path fill="#fff" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></symbol><symbol viewBox="0 0 24 24" id="people_outline"><path d="M0 0h24v24H0z" fill="none" /><path fill="#fff" d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></symbol><symbol viewBox="0 0 24 24" id="search"><path d="M0 0h24v24H0z" fill="none" /><path fill="#fff" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></symbol></defs></svg>
    <div>
      <div class="left-sidebar__logo-block">
        logo
      </div>
      <div class="left-sidebar__navigation">
        <nav>
          <ul class="left-sidebar__navigation-list">
            <li
                class="left-sidebar__navigation-list-item"
                :class="{ 'left-sidebar__navigation-list-item--active': item.isActive }"
                v-for="item in navItems"
                :key="item.id"
            >
              <a href="">
                <svg>
                  <use :xlink:href="`#${item.icon}`"/>
                </svg>
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button class="btn left-sidebar__btn-twit">Твитнуть</button>
      <div class="left-sidebar__profile-block"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    data() {
      return {
        navItems: [
          { id: 1, title: 'Главная', icon: 'home', isActive: true },
          { id: 2, title: 'Поиск', icon: 'search', isActive: false  },
          { id: 3, title: 'Уведомления', icon: 'notifications', isActive: false  },
          { id: 4, title: 'Сообщения', icon: 'main-outline', isActive: false  },
          { id: 5, title: 'Закладки', icon: 'bookmark', isActive: false  },
          { id: 6, title: 'Списки', icon: 'list_alt', isActive: false  },
          { id: 7, title: 'Профиль', icon: 'person', isActive: false  },
        ]
      }
    }
  }
</script>

<style lang="less">
  .left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 30%;
    padding: 0 10px;

    &__logo-block {
      height: 53px;
    }

    &__navigation-list {
      background: #333;

      &-item {
        width: 255px;
        padding: 7px 0;
        font-size: 20px;
        font-weight: 600;

        a {
          display: flex;
          align-items: center;
          width: fit-content;
          padding: 10px;
          color: @text-color;
          border-radius: 50px;
          transition: color 0.3s, background-color 0.3s;

          & > svg {
            width: 26px;
            height: 26px;

            path {
              fill: @main-color;
            }
          }

          & > span {
            margin: 0 20px;
          }
        }

        &:hover {
          a {
            color: @main-color;
            background-color: @main-color-hover-outline;
          }
        }
      }

      &-item--active {
        a {
          color: @main-color;
        }
      }
    }
    
    &__btn-twit {
      width: 230px;
      height: 49px;
      margin: 15px 0;
      color: #fff;
      background-color: @main-color;

      &:hover {
        background-color: @main-color-hover-fill;
      }
    }
  }
</style>