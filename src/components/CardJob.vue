<template>
    <div class="c-CardJob">
        <div class="c-CardJob-CompanyLogo">
            <img src="@/assets/images/photosnap.svg" alt="Photosnap">
        </div>
        <div class="c-CardJob-Info">
            <div class="c-CardJob-Company">
                <span class="c-CardJob-CompanyName">Photosnap</span>
                <div class="c-CardJob-Featured">
                    <BasePìll type="light">new!</BasePìll>
                    <BasePìll type="dark">featured</BasePìll>
                </div>
            </div>
            <span class="c-CardJob-JobTitle">Senior Frontend Developer</span>
            <div class="c-CardJob-Location">
                <span>1d ago</span>
                <span>Full Time</span>
                <span>USA only</span>
            </div>
        </div>
        <div class="c-CardJob-Tags">
            <BaseButton>Frontend</BaseButton>
            <BaseButton>Senior</BaseButton>
            <BaseButton>HTML</BaseButton>
            <BaseButton>CSS</BaseButton>
            <BaseButton>JavaScript</BaseButton>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../components/base/BaseButton.vue';
import BasePìll from '../components/base/BasePill.vue';
</script>

<style lang="scss" scoped>
.c-CardJob {
    background-color: var(--color-white);
    padding: 0rem 1.2rem 1.2rem 1.2rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    border-left: 0.5rem solid var(--color-primary);
}
.c-CardJob-Info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1rem;
    margin-top: -1.2rem;
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--divider-dark);
        opacity: 0.2;
    }
}
.c-CardJob-Company {
    display: flex;
    flex-direction: row;
    align-items: center;
    > span {
        font-weight: 700;
        margin-right: 1.5rem;
    }
}
.c-CardJob-CompanyName {
    color: var(--color-primary);
}
.c-CardJob-Featured {
    display: flex;
    flex-direction: row;
    > span {
        margin: 0 0.5rem;
    }
}
.c-CardJob-Location {
    display: flex;
    flex-direction: row;
    opacity: 0.7;
    > span {
        &:not(:last-child)::after {
            content: '•';
            margin: 0 0.5rem;
        }
    }
}
.c-CardJob-Featured {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
.c-CardJob-JobTitle {
    font-weight: 700;
}
.c-CardJob-Tags {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
}
.c-CardJob-CompanyLogo {
    //overlap the company logo at the top of the card
    position: relative;
    top: -1.6rem;
    img {
        width: 4rem;
    }
}
</style>