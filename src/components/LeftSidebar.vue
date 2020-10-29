<template>
  <div class="left-sidebar">
    <SvgIcon/>
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
                <svg class="navigation-list__icon">
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
  import SvgIcon from "@/components/SvgIcon";
  export default {
    name: 'LeftSidebar',
    components: {
      SvgIcon,
    },
    data() {
      return {
        navItems: [
          { id: 1, title: 'Главная', icon: 'home', isActive: true },
          { id: 2, title: 'Поиск', icon: 'search', isActive: false  },
          { id: 3, title: 'Уведомления', icon: 'notifications', isActive: false  },
          { id: 4, title: 'Сообщения', icon: 'mail_outline', isActive: false  },
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
            transition: fill 0.3s;
          }

          & > span {
            margin: 0 20px;
          }
        }

        &:hover {
          a {
            color: @main-color;
            background-color: @main-color-hover-outline;

            & svg {
              fill: @main-color;
            }
          }
        }
      }

      &-item--active {
        a {
          color: @main-color;

          & svg {
            fill: @main-color;
          }
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