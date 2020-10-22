<template>
  <div class="left-sidebar">
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
                :key="item"
            >
              <a href="">
                <img :src="`${item.icon}`" alt="">
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
          { title: 'Главная', icon: 123, isActive: true },
          { title: 'Поиск', icon: 123, isActive: false  },
          { title: 'Уведомления', icon: 123, isActive: false  },
          { title: 'Сообщения', icon: 123, isActive: false  },
          { title: 'Закладки', icon: 123, isActive: false  },
          { title: 'Списки', icon: 123, isActive: false  },
          { title: 'Профиль', icon: 123, isActive: false  },
          { title: 'Еще', icon: 123, isActive: false  },
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
      &-item {
        width: 255px;
        padding: 7px 0;
        font-size: 20px;
        font-weight: 600;

        a {
          display: block;
          width: fit-content;
          padding: 10px;
          color: @text-color;
          border-radius: 50px;
          transition: 0.3s background-color;

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